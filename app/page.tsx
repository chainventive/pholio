import Image from "next/image";
import styles from "./page.module.css";
import { Book, PhotoCollection } from "./components/Book";
import { PhotoItem } from "./components/Serie";

export default function Home() {

  const darkColor  = '#0a0a0a';
  const lightColor = '#f5f2f2';

  const cover: PhotoItem = {
    url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmNoxVMPHvUgb94MUDzVH2r1AvALyVNKnTNsgrDGyVWSiA"
  };

  let collections: PhotoCollection[] = [
    { 
      title: 'Forty four colours',
      series: [
        {
          title: 'Summer',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmNs1hMkXyJLXbnmcygvcmvERTZTG59qJuYPJg9NsH3haX" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaGYr63dFCTjtCmz9auTNc2CsSYS7WDFEThZ1nwgN1fnc" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmXcmrpAtEzCUDuY9DC5PctSppb9ZM3gjZ9RS5uPn7SgXe" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmQ6sjqbcqEWrFzj5uKgiZCE5w9ehya6jXUHHtyUJxQvyL" },
          ]
        },
        {
          title: 'Spring',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/Qmdp3b1Huz2bbSUDpU3KAPiS2mrycBEFgZrq9YewPKXasv" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/Qmb7B1DqdrwBEcMK1ExEjv1zndmeUmRTXmeWVZ1fcN4Gpe" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmWH66P1UdS7vcSPbVum6QukEQ5sZAoDYLh5hjSQL4XuMc" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaMHWi8ddyc9PsaM8YoVGXZwn1GZxqhNjgV4haAD2BqTz" },
          ]
        },
        {
          title: 'Autumn',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmPbcGuHDjEfMEuskXWc2owTpUytS7nXVhznT3Eab2uJAi" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmRWkPvZn3iagQWPGoSr7kuJXqn5GW4hZk2UXNqh1onuBk" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmZ7Vuwfq3BE7FszJwYyU9Egwxo1WVUAex8fj3RyWtMvpQ" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmRJY6rSgRdnUnuVrJuYdeviqXiVS4yUqSTD89GnKf9BKG" },
          ]
        },
        {
          title: 'Winter',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaKA2ka4HaZZjvMreTDb53LgbysXG27fnw9EjG7V38gFG" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmREujQEEBVaD8eqoum5q3Yv1bQmR2SFkDCmpSwFnxNVw4" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmVuocnC3sxVNJqqzcBwxKX4Mom9qpJFsDHCtX8HF7GVQe" },
          ]
        },
      ]
    },
    { 
      title: 'The hot spring',
      series: [
        {
          title: 'Spring',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/Qmdp3b1Huz2bbSUDpU3KAPiS2mrycBEFgZrq9YewPKXasv" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/Qmb7B1DqdrwBEcMK1ExEjv1zndmeUmRTXmeWVZ1fcN4Gpe" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmWH66P1UdS7vcSPbVum6QukEQ5sZAoDYLh5hjSQL4XuMc" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaMHWi8ddyc9PsaM8YoVGXZwn1GZxqhNjgV4haAD2BqTz" },
          ]
        },
        {
          title: 'Summer',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmNs1hMkXyJLXbnmcygvcmvERTZTG59qJuYPJg9NsH3haX" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaGYr63dFCTjtCmz9auTNc2CsSYS7WDFEThZ1nwgN1fnc" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmXcmrpAtEzCUDuY9DC5PctSppb9ZM3gjZ9RS5uPn7SgXe" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmQ6sjqbcqEWrFzj5uKgiZCE5w9ehya6jXUHHtyUJxQvyL" },
          ]
        },
        {
          title: 'Autumn',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmPbcGuHDjEfMEuskXWc2owTpUytS7nXVhznT3Eab2uJAi" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmRWkPvZn3iagQWPGoSr7kuJXqn5GW4hZk2UXNqh1onuBk" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmZ7Vuwfq3BE7FszJwYyU9Egwxo1WVUAex8fj3RyWtMvpQ" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmRJY6rSgRdnUnuVrJuYdeviqXiVS4yUqSTD89GnKf9BKG" },
          ]
        },
        {
          title: 'Winter',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaKA2ka4HaZZjvMreTDb53LgbysXG27fnw9EjG7V38gFG" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmREujQEEBVaD8eqoum5q3Yv1bQmR2SFkDCmpSwFnxNVw4" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmVuocnC3sxVNJqqzcBwxKX4Mom9qpJFsDHCtX8HF7GVQe" },
          ]
        },
      ]
    },
    { 
      title: 'Cold open',
      series: [
        {
          title: 'Winter',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaKA2ka4HaZZjvMreTDb53LgbysXG27fnw9EjG7V38gFG" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmREujQEEBVaD8eqoum5q3Yv1bQmR2SFkDCmpSwFnxNVw4" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmVuocnC3sxVNJqqzcBwxKX4Mom9qpJFsDHCtX8HF7GVQe" },
          ]
        },
        {
          title: 'Spring',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/Qmdp3b1Huz2bbSUDpU3KAPiS2mrycBEFgZrq9YewPKXasv" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/Qmb7B1DqdrwBEcMK1ExEjv1zndmeUmRTXmeWVZ1fcN4Gpe" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmWH66P1UdS7vcSPbVum6QukEQ5sZAoDYLh5hjSQL4XuMc" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaMHWi8ddyc9PsaM8YoVGXZwn1GZxqhNjgV4haAD2BqTz" },
          ]
        },
        {
          title: 'Summer',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmNs1hMkXyJLXbnmcygvcmvERTZTG59qJuYPJg9NsH3haX" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmaGYr63dFCTjtCmz9auTNc2CsSYS7WDFEThZ1nwgN1fnc" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmXcmrpAtEzCUDuY9DC5PctSppb9ZM3gjZ9RS5uPn7SgXe" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmQ6sjqbcqEWrFzj5uKgiZCE5w9ehya6jXUHHtyUJxQvyL" },
          ]
        },
        {
          title: 'Autumn',
          photos: [
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmPbcGuHDjEfMEuskXWc2owTpUytS7nXVhznT3Eab2uJAi" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmRWkPvZn3iagQWPGoSr7kuJXqn5GW4hZk2UXNqh1onuBk" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmZ7Vuwfq3BE7FszJwYyU9Egwxo1WVUAex8fj3RyWtMvpQ" },
            { url: "https://amaranth-hidden-carp-44.mypinata.cloud/ipfs/QmRJY6rSgRdnUnuVrJuYdeviqXiVS4yUqSTD89GnKf9BKG" },
          ]
        },
      ]
    },
  ]

  return (
    <main style={{ background: darkColor }}>
      <div style={{ background: darkColor }}>

        <div style={{ height: '100vh', overflow: 'hidden' }}>

          <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={cover.url}></img>

          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <div style={{ textAlign: 'center', background: 'white', color: darkColor, padding: '1.5rem 3.5rem', fontSize: '4.5rem', fontWeight: 'normal', textTransform: 'uppercase', letterSpacing: '1rem', borderRadius: '0.25rem', boxShadow: 'rgb(0 0 0) 0px 10px 15px -3px' }}>
              MY PORTFOLIO
            </div>

          </div>

        </div>

        <div style={{ height: '100vh' }}>

          <Book itemSize={25} collections={collections}></Book>

        </div>

      </div>
    </main>
  );
}
