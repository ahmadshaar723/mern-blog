import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="group relative w-full xl:w-[32%] sm:w-[48%] border h-[400px] overflow-hidden border-teal-500 hover:border-2 rounded-lg  transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt=""
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="flex flex-col gap-2 p-3">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 absolute group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500 text-center text-teal-500 font-semibold hover:bg-teal-500 hover:text-white rounded-md !rounded-tl-none transition-all m-2 py-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
