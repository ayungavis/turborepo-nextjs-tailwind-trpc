import { useCallback } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cloneIcon } from "@shui/utils";

import { AlertCircleIcon, AlertTriangleIcon } from "~/components/CustomIcon";
import type { ButtonOrLinkProps } from "../Button";
import { Button } from "../Button";
import type { BannerTheme } from "./Banner.theme";
import { bannerTheme } from "./Banner.theme";

/**
 * Props for the Banner component.
 */
export interface BannerProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title">,
    BannerTheme {
  /**
   * The title of the banner.
   */
  title: ReactNode;
  /**
   * The description of the banner.
   */
  description?: string;
  /**
   * The icon to be displayed in the banner.
   */
  icon?: ReactNode;
  /**
   * Determines whether to hide the icon.
   */
  hideIcon?: boolean;
  /**
   * The action element to be displayed in the banner.
   */
  action?: ReactNode;
  /**
   * Determines whether to hide the action element.
   */
  hideAction?: boolean;
  /**
   * The props for the action element.
   */
  actionProps?: ButtonOrLinkProps;
}

/**
 * The size of the button action.
 */
type ButtonSize = Omit<BannerProps["size"], "lg">;

/**
 * Renders a banner component with a title, description, icon, and optional action.
 *
 * @component
 * @example
 * ```tsx
 * <Banner
 *   title="Welcome!"
 *   description="This is a sample banner component."
 *   icon={<AlertCircleIcon />}
 *   variant="info"
 *   size="small"
 *   action={<Button onClick={handleClick}>Dismiss</Button>}
 * />
 * ```
 *
 * @param {BannerProps} props - The props for the Banner component.
 * @returns {JSX.Element} The rendered banner component.
 */
export const Banner = ({
  className,
  title,
  description,
  icon,
  hideIcon = false,
  variant,
  size,
  action,
  hideAction = false,
  actionProps,
  ...props
}: BannerProps): JSX.Element => {
  const {
    root,
    title: titleClass,
    description: descriptionClass,
    icon: iconClass,
    content,
  } = bannerTheme({ variant, size, className });

  /**
   * Renders the icon element based on the hideIcon and variant props.
   *
   * @returns {ReactNode} The rendered icon element.
   */
  const renderIcon = useCallback(() => {
    if (hideIcon) return null;
    if (icon) return icon;

    switch (variant) {
      case "info":
        return <AlertCircleIcon />;
      case "alert":
      case "warning":
        return <AlertTriangleIcon />;
      case "neutral":
      default:
        return null;
    }
  }, [hideIcon, icon, variant])();

  /**
   * Renders the action element based on the hideAction and variant props.
   *
   * @returns {ReactNode} The rendered action element.
   */
  const renderAction = useCallback(() => {
    if (hideAction) return null;
    if (action) return action;

    switch (variant) {
      case "info":
        return (
          <Button
            aria-label={`banner-action-${actionProps?.children}`}
            shape="default"
            size={size as ButtonSize}
            variant="tertiary"
            {...actionProps}
          >
            {actionProps?.children ?? "Dismiss"}
          </Button>
        );
      case "alert":
        return (
          <Button
            aria-label={`banner-action-${actionProps?.children}`}
            shape="default"
            size={size as ButtonSize}
            variant="alert"
            {...actionProps}
          >
            {actionProps?.children ?? "Dismiss"}
          </Button>
        );
      case "warning":
        return (
          <Button
            aria-label={`banner-action-${actionProps?.children}`}
            shape="default"
            size={size as ButtonSize}
            variant="low-emphasis-outlined"
            {...actionProps}
          >
            {actionProps?.children ?? "Dismiss"}
          </Button>
        );
      case "neutral":
      default:
        return (
          <Button
            aria-label={`banner-action-${actionProps?.children}`}
            shape="default"
            size={size as ButtonSize}
            variant="low-emphasis"
            {...actionProps}
          >
            {actionProps?.children ?? "Dismiss"}
          </Button>
        );
    }
  }, [action, actionProps, hideAction, size, variant])();

  return (
    <div {...props} className={root({ className })}>
      {cloneIcon(renderIcon, { className: iconClass({ variant, size }) })}
      <div className={content()}>
        {typeof title === "string" ? (
          <p className={titleClass({ variant, size })}>{title}</p>
        ) : (
          title
        )}
        {description && (
          <p className={descriptionClass({ variant, size })}>{description}</p>
        )}
      </div>
      {renderAction}
    </div>
  );
};
