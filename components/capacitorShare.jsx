import { Share } from "@capacitor/share";
import { Button } from "@chakra-ui/react";

const ShareFunc = () => {
  const shareBtn = async () => {
    await Share.share({
      title: "See cool stuff",
      text: "Really awesome thing you need to see right meow",
      url: "http://ionicframework.com/",
      dialogTitle: "Share with buddies",
    });
  };

  return <Button onClick={shareBtn}>Share Mobile App</Button>;
};

export default ShareFunc;
