import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import style from './likeButton.module.scss';

interface Props {
  id: string;
}

const LikeButton = ({ id }: Props) => {
  const [liked, setLiked] = useState(false);
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLiked(!liked);
    localStorage.setItem(id, `${!liked}`);
  };
  useEffect(() => {
    if (localStorage.getItem(id) === 'true') {
      setLiked(true);
    }
  }, [id]);

  return (
    <Button className={liked ? style.liked : style.normal} onClick={handleLike}>
      Like
    </Button>
  );
};

export default LikeButton;
