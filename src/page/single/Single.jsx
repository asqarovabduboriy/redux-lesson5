import React from "react";
import "./Single.css";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../context/products";
import { FaStar } from "react-icons/fa";

const Single = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);
  console.log(data);
  if (data) {
    return (
      <>
      <div className="container">
      <div className="big_wrapper_flex">
          <div className="wrapper_imgs_big">
            <div className="img_wrapper">
              <img src={data?.images[0]} alt={data?.title} />
            </div>
            <div className="small_img">
              <div className="small_img_wrapper">
                <img src={data?.images[1]} alt="" />
              </div>
              <div className="small_img_wrapper">
                <img src={data?.images[2]} alt="" />
              </div>
              <div className="small_img_wrapper">
                <img src={data?.images[3]} alt="" />
              </div>
              {data?.images[4] ? (
                <div className="small_img_wrapper">
                  <img src={data?.images[4]} alt="" />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="wrapper_info_text">
            <div className="brand">
              <h3>{data?.brand}</h3>
            </div>
            <div className="category">
              <span>{data?.category}</span>
            </div>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <div className="rating">
              {Array.from({ length: Math.round(data?.rating) }).map(
                (_, index) => (
                  <FaStar key={index} className="star_card" />
                )
              )}
              <p style={{ marginBottom: "0px" }}>{data?.rating}</p>
            </div>
            <div className="price">
              <h3>${data?.price}</h3> 
              <h4>stock: {data?.stock}</h4> 
            </div>
            <div className="harakteristika">
                   <h1>Harakteristika</h1>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero distinctio architecto necessitatibus numquam facere quos assumenda. Ad ullam repellat alias, in deserunt minus numquam impedit reprehenderit, odio dolore amet inventore, delectus laborum. Dolore animi perspiciatis accusantium quisquam itaque, deserunt vitae hic ea possimus, placeat officiis fugit veritatis architecto illo nisi.</p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }else{
    console.log('err');
  }

  return (
    <>
    </>
  );
};

export default Single;
