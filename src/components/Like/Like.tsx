import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
  isLiked: boolean;
}
const Like = ({ onClick, isLiked }: LikeProps) => {
  const [status, setStatus] = useState(isLiked);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
