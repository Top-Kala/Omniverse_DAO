import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NFT from '../components/NFT'
import MintImgBottom from '../static/mintImg-bg.png'
import EthereumImageSVG from '../static/logo/ethereum-eth-logo-1.svg'
import BscscanImageSVG from '../static/logo/dbanner1_copy_4_1.svg'
import AvaxImageSVG from '../static/logo/dbanner1_copy_1.svg'
import PolygonImageSVG from '../static/logo/dbanner1_copy_3_1.svg'
import ArbitrumImageSVG from '../static/logo/dbanner1_copy_2_1.svg'
import FantomImageSVG from '../static/logo/fantom-ftm-logo-1.svg'
import OptimisticImageSVG from '../static/logo/JtpX95Rt_400x400-1.svg'

import EthereumImage from '../static/logo/ethereum-eth-logo-1.png'
import BscscanImage from '../static/logo/dbanner1_copy_4_1.png'
import AvaxImage from '../static/logo/dbanner1_copy_1.png'
import PolygonImage from '../static/logo/dbanner1_copy_3_1.png'
import ArbitrumImage from '../static/logo/dbanner1_copy_2_1.png'
import FantomImage from '../static/logo/fantom-ftm-logo-1.png'
import OptimisticImage from '../static/logo/JtpX95Rt_400x400-1.png'

import MinusSign from '../static/minus-sign.png'
import PlusSign from '../static/plus-sign.png'
import mintstyles from '../styles/mint.module.css'
import selectstyles from '../styles/Selectchain.module.css'
import WalletConnectProvider  from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import React, { useState , useEffect } from 'react'
import AdvancedONT from '../services/abis/AdvancedONT.json'

//whitelist address each network
import arbitrumwl from '../services/whitelist/arbitrum.json'
import avalanchewl from '../services/whitelist/avalanche.json'
import bscwl from '../services/whitelist/bsc.json'
import ethereumwl from '../services/whitelist/ethereum.json'
import fantomwl from '../services/whitelist/fantom.json'
import optimismwl from '../services/whitelist/optimism.json'
import polygonwl from '../services/whitelist/polygon.json'
import earlysupporter from '../services/whitelist/earlysupporter.json'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Slide } from 'react-toastify'

//video 
const { MerkleTree } = require("merkletreejs");
const keccak256 = require('keccak256');

interface Address {
  address: string,
  imageSVG: string,
  image: any,
  name: string,
  price: number,
  chainId: string,
  unit: string,
  color: string,
  index: number
} 

interface contractInfo {
  [key: string]: Address;
}
 interface chains {
   chainId: string,
   name: string
 }

const providerOptions  = {
	walletconnect: {
		package: WalletConnectProvider, 
		options: {
		infuraId: "https://mainnet.infura.io/v3/12a4aa4f06fe4bc7b5d50d73da475e2a"
		}
	}
 }

 const networkParams:{[key:string]:object} = {
  "0x1": {
    chainId: "0x1",
    rpcUrls: ['https://api.mycryptoapi.com/eth'],
    chainName: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    blockExplorerUrls: ['https://etherscan.io']
  },
  "0x38": {
    chainId: '0x38',
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
        name: 'BSC',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: ['https://bsc-dataseed1.binance.org'],
    blockExplorerUrls: ['https://bscscan.com']
  },
  "0xa86a": {
    chainId: '0xA86A',
    chainName: 'Avalanche Network',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io/']
  },
  "0x89": {
    chainId: '0x89',
    chainName: 'Matic Mainnet',
    nativeCurrency: {
        name: 'Matic',
        symbol: 'MATIC',
        decimals: 18
    },
    rpcUrls: ['https://polygon-rpc.com'],
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  "0xa4b1": {
    chainId: '0xA4B1',
    chainName: 'Arbitrum Mainnet',
    nativeCurrency: {
        name: 'Arbitrum',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io/']
  },
  "0xfa": {
    chainId: '0xFA',
    chainName: 'Fantom Mainnet',
    nativeCurrency: {
        name: 'Fantom',
        symbol: 'MTF',
        decimals: 18
    },
    rpcUrls: ['https://rpc.fantom.network'],
    blockExplorerUrls: ['https://ftmscan.com']
  },
  "0xa": {
    chainId: '0xA',
    chainName: 'Optimistic Ethereum',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: ['https://mainnet.optimism.io'],
    blockExplorerUrls: ['https://optimistic.ethereum.io']
  },
};

const addresses:contractInfo = {
  '1': {
    address: '0x7FFE2672C100bFb0094ad0B4d592Dd9f9416f1AC',
    imageSVG: EthereumImageSVG,
    image: EthereumImage,
    name: 'Ethereum',
    price: 0.06,
    chainId: '1',
    unit: 'ETH',
    color:'#8C8C8C',
    index: 0
  },
  '42161': {
    address: '0x6c25c2c42928Ee8D65D2C3b0a29571BD4549A96B',
    imageSVG: ArbitrumImageSVG,
    image: ArbitrumImage,
    name: 'Arbitrum',
    price: 0.06,
    chainId: '10',
    unit: 'ETH',
    color:'#28A0F0',
    index: 500
  },
  '137': {
    address: '0x54417f05c4D5E08B079bd671d0158Ff2854a4a88',
    imageSVG: PolygonImageSVG,
    image: PolygonImage,
    name: 'Polygon',
    price: 100,
    chainId: '9',
    unit: 'MATIC',
    color:'#8247E5',
    index: 1350
  },
  '43114': {
    address: '0x018BB96D00309236E6D56046BBD8E9e083cC8CE9',
    imageSVG:AvaxImageSVG,
    image: AvaxImage,
    name: 'Avalanche',
    price: 3.5,
    chainId: '6',
    unit: 'AVAX',
    color:'#E84142',
    index: 2200
  },
  '56': {
    address: '0xc5F4f67442E688Bc4Da2d9D8a055374e642490a4',
    imageSVG:BscscanImageSVG,
    image: BscscanImage,
    name: 'BNB Chain',
    price: 0.3,
    chainId: '2',
    unit: 'BNB',
    color:'#F3BA2F',
    index: 3050
  },
  '10': {
    address: '0xbb2e4B6e10FE9cCEBFDCa805cdCF9fA9fb65248F',
    imageSVG:OptimisticImageSVG,
    image:OptimisticImage,
    name: 'Optimism',
    price: 0.06,
    chainId: '11',
    unit: 'ETH',
    color:'#FF0320',
    index:3900
  },
  '250': {
    address: '0x165865de32bA3d9552FF814C2F283964c2B61a7D',
    imageSVG: FantomImageSVG,
    image: FantomImage,
    name: 'Fantom',
    price: 285,
    chainId: '12',
    unit: 'FTM',
    color:'#13B5EC',
    index: 4200
  }
}
const chainIds: Array<chains> = [
  {
    chainId:'1',
    name:'Ethereum',
  },
  {
    chainId:'42161',
    name:'Arbitrum',
  },
  {
    chainId:'137',
    name:'Polygon',
  },
  {
    chainId:'43114',
    name:'Avalanche',
  },
  {
    chainId:'56',
    name:'BNB Chain',
  },
  {
    chainId:'10',
    name:'Optimism',
  },
  {
    chainId:'250',
    name:'Fantom',
  },
]

const mint: NextPage = () => {
  const [provider, setProvider] = useState<any>()
  const [library, setLibrary] = useState<any>()
  const [account, setAccount] = useState<any>()
  const [network, setNetwork] = useState<string>('1')
  const [chainId, setChainId] = useState<any>();
  const [toChain, setToChain] = useState<string>('1')
  const [mintNum, setMintNum] = useState<number>(1)
  const [ownToken, setOwnToken] = useState<Array<number>>([])
  const [totalNFTCount, setTotalNFTCount] = useState<number>(0)
  const [nextTokenId, setNextTokenId] = useState<number>(0)
  const [substrateIndex, setSubStrateIndex] = useState<number>(0)
  const [transferNFT, setTransferNFT] = useState<number>(0)
  const [init, setInitial] = useState<boolean>(false)
  const [isMinting,setIsMinting] = useState<boolean>(false)
  const [estimateFee, setEstimateFee] = useState<string>('')
  const [mintable, setMintable] = useState<boolean>(false)
  const [isTransferring,setIsTransferring] = useState<boolean>(false)
  const [isSwitchingNetwork,setIsSwitchingNetwork] = useState<boolean>(false)


	const connect = async():Promise<void> =>{
		try {
      let web3Modal: Web3Modal | null

      if (typeof window !== 'undefined') {
        web3Modal = new Web3Modal({
          network: 'mainnet', // optional
          cacheProvider: true,
          providerOptions, // required
        })
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const accounts = await library.listAccounts();
        const network = await library.getNetwork();

        setProvider(provider);
        setLibrary(library);
        if (accounts) 
          setAccount(accounts[0]);
        if(isContainChains(network.chainId)){
          setChainId(network.chainId);
          setNetwork(network.chainId.toString());
        } else {
          setInitial(true)
        }
      }
		} catch (error) {
			console.error(error);
		}
	}
  const isContainChains = (e:any):boolean => {
    let returnValue:number = 0
    chainIds.map(function(chain, idx){
      if(chain.chainId==e.toString()){
        returnValue=1
      } 
    })
    if(returnValue==1){
      return true
    } else {
      return false
    }
  }

  const handleNetwork = (e:any):void => {
    if(init==false){
      setInitial(true)
    }
    setNetwork(e);
  }

  const switchNetwork = async ():Promise<void> => {
    setIsSwitchingNetwork(true);
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId:`0x${Number(network).toString(16)}` }]
      });
      window.location.reload();
    } catch (switchError:any) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[`0x${Number(network).toString(16)}`]]
          });
        } catch (error:any) {
          errorToast("Fail to add the network, Please try again")
          setNetwork(chainId)
        }
      } else if(switchError.code == 4001) {
        errorToast(switchError.message)
        setNetwork(chainId)
      } else {
        errorToast("Please confirm the network connection")
        setNetwork(chainId)
      }
    }
    setIsSwitchingNetwork(false);
  }

  const decrease = ():void => {
    if(mintNum > 1) {
      setMintNum(mintNum - 1)
    }
  }

  const increase = ():void => {
    if(mintNum < 5) {
      setMintNum(mintNum + 1)
    }
  }
  const errorToast = (error:string):void =>{
    toast.error(error,{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      transition: Slide
    })
  }

  const getInfo = async ():Promise<void> => {
    if(addresses[chainId]) 
    {
      try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract =  new ethers.Contract(addresses[`${Number(chainId).toString(10)}`].address, AdvancedONT.abi, signer)

        let result = await tokenContract.balanceOf(account)
        let token, tokenlist = []
        for (var i = 0 ;i < Number(result); i++) {
          token = await tokenContract.tokenOfOwnerByIndex(account, i)
          tokenlist.push(Number(token))
        }
  
        setOwnToken(tokenlist)
  
        let max_mint = await tokenContract.maxMintId()
        let nextId = await tokenContract.nextMintId()
  
        setTotalNFTCount(Number(max_mint))
        setNextTokenId(Number(nextId))
        setSubStrateIndex(addresses[`${Number(chainId).toString(10)}`].index)

        let publicmintFlag = await tokenContract._publicSaleStarted()
        let saleFlag = await tokenContract._saleStarted()
        if(!saleFlag && !publicmintFlag){
          setMintable(false)
          errorToast('Sale has not started on '+ addresses[chainId].name)
        } else {
          setMintable(true)
        }
      } catch(error){
        errorToast("Please check the Internet Connection")
      }
    }
  }

  const mint = async ():Promise<void> => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
    const tokenContract =  new ethers.Contract(addresses[`${Number(chainId).toString(10)}`].address, AdvancedONT.abi, signer)
    /// first private sale

    // let wladdress = ethereumwl;
    // if(Number(chainId) === 42161) {
    //   wladdress = arbitrumwl;
    // } else if(Number(chainId) === 137) {
    //   wladdress = polygonwl;
    // } else if(Number(chainId) === 43114) {
    //   wladdress = avalanchewl;
    // } else if(Number(chainId) === 56) {
    //   wladdress = bscwl;
    // } else if(Number(chainId) === 10) {
    //   wladdress = optimismwl;
    // } else if(Number(chainId) === 250) {
    //   wladdress = fantomwl;
    // } 

    /// second private sale
    let wladdress = earlysupporter
    const leafNodes = wladdress.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256,{sortPairs: true});
    const merkleProof = merkleTree.getHexProof(keccak256(account));

    let mintResult
    setIsMinting(true)


    try {
      let publicmintFlag = await tokenContract._publicSaleStarted()
      let saleFlag = await tokenContract._saleStarted()
      if(saleFlag && publicmintFlag) {
        const currentBalance = await library.getBalance(account);
        console.log(currentBalance)

        mintResult = await tokenContract.publicMint(mintNum, {value: ethers.utils.parseEther((addresses[chainId].price*mintNum).toString())})
        const receipt = await mintResult.wait()
        if(receipt!=null){
          setIsMinting(false)
          getInfo()
        }
        // add the the function to get the emit from the contract and call the getInfo()
      } else if (saleFlag) {

        const currentBalance = await tokenContract.balanceOf(account);
        if(Number(currentBalance) + mintNum > 5){
          errorToast("You have already minted " + String(Number(currentBalance)) + " gregs \n" + "Can't mint more than 5 gregs in private sale")
          setIsMinting(false)
        } else{
          mintResult = await tokenContract.mint(mintNum,merkleProof, {value: ethers.utils.parseEther((addresses[chainId].price*mintNum).toString())})
          // add the the function to get the emit from the contract and call the getInfo()
          const receipt = await mintResult.wait()
          if(receipt!=null){
            setIsMinting(false)
            getInfo()
          }
        }
      } 
    } catch (e:any) {
      console.log(e);
      if(e['code'] == 4001){
        errorToast("user denied transaction signature")
      } else {
        const currentBalance = await library.getBalance(account)
       
        if(Number(currentBalance)/Math.pow(10,18)<addresses[chainId].price*mintNum){
          errorToast("There is not enough money to mint nft")
        } else {
          errorToast('your address is not whitelisted on '+ addresses[chainId].name)
        }
      }
      setIsMinting(false)
    }
  }

  const sendNFT = async ():Promise<void> => {
    if(!transferNFT){
      errorToast('Select NFT you want to transfer, please')
      return
    }
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
		  const signer = provider.getSigner();
      const tokenContract =  new ethers.Contract(addresses[`${Number(chainId).toString(10)}`].address, AdvancedONT.abi, signer)
      const adapterParam = ethers.utils.solidityPack(["uint16", "uint256"], [1, 250000])

      const estimateFee = await tokenContract.estimateSendFee(addresses[toChain].chainId, account,transferNFT,false,adapterParam)
      const currentBalance = await library.getBalance(account)

      if(Number(estimateFee[0]) * 1.1 > Number(currentBalance)) {
        errorToast('You do not have enough balance for transfer')
        return
      }
      let gasFee = Number(estimateFee[0])/Math.pow(10,18)*1.1*Math.pow(10,18)
      gasFee = gasFee - gasFee%1
      setIsTransferring(true)
      let mintResult = await tokenContract.sendFrom(account,addresses[toChain].chainId,account, transferNFT,account,  "0x000000000000000000000000000000000000dEaD",adapterParam, {value: gasFee.toString()})
      // please add the function to get the emit from the contract and call the getInfo()
      const receipt = await mintResult.wait()
      if(receipt!=null){
        getInfo()
        setIsTransferring(false)
      }
      // add emit function after redploy the contract
      const destination_contract =  new ethers.Contract(addresses[`${Number(chainId).toString(10)}`].address, AdvancedONT.abi, signer)
      destination_contract.on('Transfer',(from , to , tokenID) => {
        if(to==account){
          toast.success(`${ addresses[chainId].name } sent greg#${ tokenID } to ${ addresses[toChain].name}`,{
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            transition: Slide
          })
          setIsTransferring(false)
        }
      })

    } catch (e:any) {
      if(e['code'] == 4001){
        errorToast("user denied transaction signature")
      } else {

        if(String(chainId)==toChain){
          errorToast(`${addresses[toChain].name} is currently unavailable for transfer`)
        } else {
          errorToast('Sending NFT error, Please try again')
        }
      }
      setIsTransferring(false)
    }
    setTransferNFT(0)
  }
  const videoSection = () => {
    if(account){
      if(Number(chainId) === 1) {
        return(<>
          <video
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src='../static/video/ethereum.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>)
      }  else if(Number(chainId) === 42161) {
        return(<>
          <video
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src='../static/video/arbitrum.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>)
      }  else if(Number(chainId) === 137) {
        return(<>
          <video
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src='../static/video/polygon.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>)
      }  else if(Number(chainId) === 43114) {
        return(<>
          <video
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src='../static/video/avalanche.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>)
      }  else if(Number(chainId) === 56) {
        return(<>
          <video
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src='../static/video/binance.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>)
      }  else if(Number(chainId) === 10) {
        return(<>
          <video
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src='../static/video/optimistic.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>)
      }  else if(Number(chainId) === 250) {
        return(<>
          <video
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src='../static/video/fantom.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>)
      } 
    } else {
      return(<>
        <video
          style={{ objectFit: "cover" }}
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
        >
          <source src='../static/video/ethereum.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </>)
    }

  }
  const mintButton = () => {
    if(mintable){
      if(isMinting){
        return(
          <button type='button'  disabled><i  className="fa fa-spinner fa-spin" style={{"letterSpacing":"normal"}}/>MINT NOW</button>
        )
      } else {
        if(isSwitchingNetwork){
          return(
            <button type='button' disabled>MINT NOW</button>
          )
        } else {
          return(
            <button type='button' onClick={()=>mint()}>MINT NOW</button>
          )
        }
      }
    } else{
      return(
        <button type='button'  disabled>MINT NOW</button>
      )
    }
  }
  const selectOptions = () => {
    return(
      <>
        {
          chainIds.map(function(chain, idx){
            if(chain.chainId==network){
              return <option key={idx} value={chain.chainId} selected>{chain.name}</option>
            } else {
              return <option key={idx} value={chain.chainId}>{chain.name}</option>
            }
          })
        }
      </>
    )
  }

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts:any) => {
        setAccount(accounts[0]);
      };
  
      const handleChainChanged = (chainId:any) => {
        if(isContainChains(parseInt(chainId,16))){
          setChainId(parseInt(chainId,16));
        }else{
          errorToast("The current network is not supported, please change the network")
          switchNetwork()
          setNetwork('1')
        }
      };
  
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
  
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
        }
      };
    }
  }, [provider]);

  useEffect(() => {
    const calculateFee = async():Promise<void> => {
      try{
        if(transferNFT){
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const tokenContract =  new ethers.Contract(addresses[`${Number(chainId).toString(10)}`].address, AdvancedONT.abi, signer)
          const adapterParam = ethers.utils.solidityPack(["uint16", "uint256"], [1, 200000])
          console.log(addresses[toChain].chainId)
          const fee:any = await tokenContract.estimateSendFee(addresses[toChain].chainId, account,transferNFT,false,adapterParam)
          setEstimateFee("Estimate Fee :"+(Number(fee[0])/Math.pow(10,18)*1.1).toFixed(10)+addresses[chainId].unit)
        } else {
          setEstimateFee('')
        }
      } catch(error){
        console.log(error)
        if(String(chainId) == toChain){
          errorToast(`${addresses[toChain].name} is currently unavailable for transfer`)
        } else {
          errorToast('Please Check the Internet Connection!!!')
        }

      }
    }
    console.log(chainId,toChain,transferNFT)
    calculateFee()
  },[toChain,transferNFT])


  useEffect(()=>{
    if(chainId){
      getInfo()
    }
  },[chainId,account])


  useEffect(()=>{
    if(init==true){
      setTransferNFT(0)
      switchNetwork()
    }
  },[network, init])


  useEffect(()=>{
    connect()
  },[])

  return (
    <>
      <Head>
        <title>Omni X | Mint</title>
        <meta name="description" content="Omnix mint" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <ToastContainer />
      <div className={mintstyles.mintHero}> 
        <Navbar/>
        <div className={mintstyles.container}>
          <div className={mintstyles.mintImgWrap}>
            <div className={mintstyles.mintImgT}>
              {videoSection()}
            </div>
            <div className={mintstyles.mintImgB}>
              <Image src={MintImgBottom} alt="mint background" layout='responsive' />
              <div className={mintstyles.mintImgtext}>
                <h1>&#40;GREG, GREG&#41;</h1>
              </div>
            </div>
          </div>
          <div className={mintstyles.mintDesc}>
            <h1>Description</h1>
            <div className={mintstyles.mintDescSec}>
              <p>greg is our genesis collection that represents our community and technological breakthroughs</p>
              <p>mint greg below from any chain you wish and transfer him to any other chain using the “Transfer” box below</p>
              <p>5 mints per transaction</p>
            </div>
            <div className={mintstyles.mintDataGrid}>
              <div className={mintstyles.mintDataWrap}>
                <h5>MINTED</h5>
                <span>{nextTokenId - substrateIndex}/{totalNFTCount - substrateIndex}</span>
              </div>
              <span className={mintstyles.line}></span>
              <div className={mintstyles.mintDataWrap}>
                <h5>PRICE</h5>
                <span>{chainId?addresses[`${Number(chainId)}`].price:0}<Image src={chainId?addresses[`${Number(chainId)}`].imageSVG:EthereumImageSVG} width={29.84} height={25.46} alt="ikon"></Image></span>
              </div>
              <span className={mintstyles.line}></span>
              <div className={mintstyles.mintDataWrap}>
                <h5>QUANTITY</h5>
                <div className={mintstyles.counterWrap}>
                  <button onClick={()=>decrease()}><Image src={MinusSign} alt="minus"></Image></button>
                  <span>{mintNum}</span>
                  <button onClick={()=>increase()}><Image src={PlusSign} alt="plus"></Image></button>
                </div>
              </div>
            </div>
            <div className={selectstyles.nftselectWrap}>
                <label>Select chain to mint on</label>
                <div className={selectstyles.transSelWrap} style={{"background":addresses[network].color}}>
                  <div className={selectstyles.chainIcon}>
                    <Image  style={{"borderRadius":"50%"}}  src={chainId?addresses[`${Number(network)}`].image:EthereumImage} width={29.84} height={25.46} alt="ikon"></Image>
                  </div>
                  <select
                    onChange={(e) => {
                      handleNetwork(e.target.value);
                    }}
                  >
                    {selectOptions()}
                  </select>
                </div>
            </div>
            <div className={mintstyles.mintBtnWrap}>
              {mintButton()}
            </div>
          </div>
        </div>
      </div>
      <div className={mintstyles.mintSecBg}>
        <div className={mintstyles.mintheadingImg}>
            <h1>YOUR NFTS</h1>
          </div>
        <NFT
          mintedNFTs={ownToken}
          transferNFT={transferNFT}
          setTransferNFT={setTransferNFT}
          toChain={toChain}
          chainName = {addresses[toChain].name}
          isTransferring = {isTransferring}
          setToChain={setToChain}
          sendNFT={sendNFT}
          estimateFee={estimateFee}
        />
        <Footer/>
      </div>
    </>
  )
}

export default mint
