// OptiMint: A React project showcasing an AI Token platform with Twitter bio functionality

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const App = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("0.00");
  const [twitterBio, setTwitterBio] = useState(
    "🚀 OptiMint | The future of AI-powered tokens 🌿 | Simplifying innovation & growth | Join the revolution 🌐 #AI #Crypto #Innovation"
  );

  const handleConnectWallet = () => {
    // Placeholder function for connecting wallet
    console.log("👀 Someone tried to connect their wallet!");
    alert("Connecting wallet...");
  };

  const handleMintToken = () => {
    // Placeholder function for minting tokens
    if (address) {
      console.log("🤑 Minting tokens! Cha-ching!");
      alert(`Minting tokens for ${address}...`);
      setBalance("100.00");
    } else {
      console.log("🤔 Hmmm, no wallet address yet...");
      alert("Please connect your wallet first!");
    }
  };

  const easterEgg = () => {
    // Hidden feature: Easter egg function
    console.log("🎉 You found the hidden easter egg! Good job, detective.");
    alert("You found the OptiMint Easter Egg! 🌟");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">OptiMint</h1>
      <Card className="w-full max-w-md">
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <Input
              type="text"
              placeholder="Enter Wallet Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full"
            />
            <Button onClick={handleConnectWallet} className="w-full">
              Connect Wallet
            </Button>
            <Button onClick={handleMintToken} className="w-full">
              Mint Tokens
            </Button>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">Wallet Balance:</p>
              <p className="text-2xl">{balance} OPT</p>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold">Twitter Bio:</p>
              <p className="text-sm">{twitterBio}</p>
            </div>
            <Button onClick={easterEgg} className="mt-4 bg-green-500 hover:bg-green-600 text-white">
              Click Me If You Dare
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
