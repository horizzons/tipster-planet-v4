import { Share2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "./ui/use-toast";

export const ShareButton = () => {
  const shareUrl = window.location.href;
  const shareTitle = "Check out this Tip Calculator!";
  const shareText = "Calculate tips easily with this awesome tool!";

  const shareViaEmail = () => {
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      shareTitle
    )}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`;
    window.location.href = mailtoLink;
  };

  const shareToSocial = async (platform: string) => {
    const urls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank", "width=600,height=400");
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        toast({
          description: "Successfully shared!",
        });
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          toast({
            variant: "destructive",
            description: "Failed to share. Please try another method.",
          });
        }
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-600 hover:bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Share2 className="h-5 w-5" />
          <span className="sr-only">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {navigator.share && (
          <DropdownMenuItem onClick={handleNativeShare}>
            Share...
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => shareToSocial("twitter")}>
          Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => shareToSocial("facebook")}>
          Share on Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => shareToSocial("linkedin")}>
          Share on LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareViaEmail}>
          Share via Email
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};