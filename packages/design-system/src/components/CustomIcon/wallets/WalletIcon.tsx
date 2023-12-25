import { useCallback } from "react";

import { cloneIcon } from "@shui/utils";

import type { CustomIconProps } from "..";
import { BinanceIcon } from "./BinanceIcon";
import { BloctoIcon } from "./BloctoIcon";
import { BraveIcon } from "./BraveIcon";
import { CoinbaseIcon } from "./CoinbaseIcon";
import { MathWalletIcon } from "./MathWalletIcon";
import { MetamaskIcon } from "./MetamaskIcon";
import { NineEightIcon } from "./NineEightIcon";
import { OkkIcon } from "./OkkIcon";
import { OperaIcon } from "./OperaIcon";
import { SafepalIcon } from "./SafepalIcon";
import { TPIcon } from "./TPIcon";
import { TrustWalletIcon } from "./TrustWalletIcon";
import { WalletConnectIcon } from "./WalletConnectIcon";

/**
 * The available types of wallet icons.
 */
const WALLET_TYPE = [
  "98",
  "binance",
  "blocto",
  "bravewallet",
  "coinbase",
  "mathwallet",
  "metamask",
  "okk",
  "opera",
  "safepal",
  "tp",
  "trustwallet",
  "walletconnect",
] as const;
export type WalletType = (typeof WALLET_TYPE)[number];

/**
 * Props for the WalletIcon component.
 */
export interface WalletIconProps extends CustomIconProps {
  /**
   * The type of the wallet icon.
   */
  type: WalletType;
}

/**
 * Renders a wallet icon based on the specified type.
 *
 * @example
 * ```tsx
 * <WalletIcon type="metamask" />
 * ```
 *
 * @param type - The type of the wallet icon.
 * @param props - Additional props for the wallet icon component.
 * @returns The rendered wallet icon component.
 * @throws Error if the specified type is invalid.
 */
export const WalletIcon = ({ type, ...props }: WalletIconProps) => {
  /**
   * Renders the appropriate wallet icon based on the specified type.
   *
   * @returns The rendered wallet icon component.
   */
  const renderIcon = useCallback(() => {
    switch (type) {
      case "98":
        return <NineEightIcon />;
      case "binance":
        return <BinanceIcon />;
      case "blocto":
        return <BloctoIcon />;
      case "bravewallet":
        return <BraveIcon />;
      case "coinbase":
        return <CoinbaseIcon />;
      case "mathwallet":
        return <MathWalletIcon />;
      case "metamask":
        return <MetamaskIcon />;
      case "okk":
        return <OkkIcon />;
      case "opera":
        return <OperaIcon />;
      case "safepal":
        return <SafepalIcon />;
      case "tp":
        return <TPIcon />;
      case "trustwallet":
        return <TrustWalletIcon />;
      case "walletconnect":
        return <WalletConnectIcon />;
      default:
        throw new Error("Invalid wallet type");
    }
  }, [type])();

  return cloneIcon(renderIcon, props);
};
