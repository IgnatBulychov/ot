import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import Btn from "../../components/common/buttons/btn";
import BtnLink from "../../components/common/buttons/btn-link";
import Card from "../../components/common/cards/card";

import type { Post } from "../../types/Post";

function Post(post: Post) {
  return (
    <div className="container flex justify-center items-center h-[calc(100vh-65px)] box-shadow-lg">
      <Card>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          <div>{post.description}</div>
          <div>
            <img src={post.image}></img>
          </div>
        </Card.Text>
        <Card.Actions>
          <BtnLink to="/" color="transparent">
            <AiOutlineArrowLeft />
          </BtnLink>
          <Btn color="transparent">like</Btn>
        </Card.Actions>
      </Card>
    </div>
  );
}

export default Post;
