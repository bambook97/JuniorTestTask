import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { FavoriteBorder, FavoriteRounded } from '@mui/icons-material';
import style from './likeButton.module.scss';

interface LikeButtonProps {
  id: string;
}

const LikeButton = ({ id }: LikeButtonProps) => {
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
    <Button className={style.liked} onClick={handleLike}>
      {liked ? <FavoriteRounded /> : <FavoriteBorder />}
    </Button>
  );
};

export default LikeButton;
