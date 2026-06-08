import { useRef } from "react";
import { selectError } from "@videojs/core/dom";
import { AlertDialog, usePlayer } from "@videojs/react";

export const errorClasses = {
  root: "media-error",
  dialog: "media-error__dialog media-surface",
  content: "media-error__content",
  title: "media-error__title",
  description: "media-error__description",
  actions: "media-error__actions",
  close: "media-button",
};

export function ErrorDialog({ classes }) {
  const errorState = usePlayer(selectError);
  const lastError = useRef(errorState?.error);
  if (errorState?.error) lastError.current = errorState.error;

  if (!errorState) return null;

  return (
    <AlertDialog.Root
      open={!!errorState.error}
      onOpenChange={(open) => {
        if (!open) errorState.dismissError();
      }}>
      <AlertDialog.Popup className={classes?.root}>
        <div className={classes?.dialog}>
          <div className={classes?.content}>
            <AlertDialog.Title className={classes?.title}>
              Something went wrong.
            </AlertDialog.Title>
            <AlertDialog.Description className={classes?.description}>
              {lastError.current?.message ??
                "An error occurred while trying to play the video. Please try again."}
            </AlertDialog.Description>
          </div>
          <div className={classes?.actions}>
            <AlertDialog.Close className={classes?.close}>OK</AlertDialog.Close>
          </div>
        </div>
      </AlertDialog.Popup>
    </AlertDialog.Root>
  );
}
