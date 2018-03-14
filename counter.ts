import {
    ObjectStore,
    RemoteStore,
    LocalDB,
    InmemDB,
} from '@aperturerobotics/objstore'
import * as IPFS from 'ipfs'
import {
    Chain,
    BuildChain,
} from '@aperturerobotics/inca'
import { generateKeyPair } from '@aperturerobotics/inca/key'

// Counter is the counter example.
export class Counter {
    // levelBlob is the level blob database.
    // public levelBlob: LevelBlobDb
    // levelBlob is the key/value database.
    public levelBlob: InmemDB
    // remoteStore is the remote store
    public remoteStore: RemoteStore
    // localStore is the local database
    public localStore: LocalDB
    // objStore is the object storage stack.
    public objStore: ObjectStore
    // ipfs is the ipfs instance
    public ipfs: IPFS
    // refCount is the reference count.
    public refCount: number
    // chain is the blockchain reference
    public chain: Chain
    // validatorPriv is the validator private key
    public validatorPriv: Object

    constructor() {
        let path = './data'
        console.log('ipfs starting')
        this.ipfs = new IPFS({
            init: true,
            start: true,
            EXPERIMENTAL: {
                pubsub: true,
            },
            repo: path,
            config: { Addresses: { Swarm: [] } }
        })
        this.ipfs.on('ready', () => {
            this.onIpfsReady()
        })


        this.levelBlob = new InmemDB()
        this.remoteStore = new RemoteStore(this.ipfs)
        this.localStore = new LocalDB(this.levelBlob)
        this.objStore = new ObjectStore(this.localStore, this.remoteStore)
    }

    public close() {
        this.ipfs.close()
    }

    // onIpfsReady is called when IPFS is ready
    private onIpfsReady() {
        console.log('ipfs ready')

        this.loadBlockchain()
    }

    // loadBlockchain initializes the blockchain.
    private async loadBlockchain(): Promise<void> {
        console.log('generating keypair')
        this.validatorPriv = await generateKeyPair('ed25519', 256)

        console.log('building chain')
        this.chain = await BuildChain(
            this.levelBlob,
            this.objStore,
            'test-1',
            this.validatorPriv,
        )

        let chainConfig = this.chain.getChainConfig()

        console.log('chain ready')
        console.log(JSON.stringify(chainConfig, null, 4))
    }
}
