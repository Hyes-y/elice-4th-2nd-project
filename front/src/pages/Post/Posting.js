import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PostingHeader from "./PostingHeader";
import PostingContents from "./PostingContents";
import PostingTag from "./PostingTag";
import PostingCategory from "./PostingCategory";
import { PostContainer } from "../../styles/PostStyle";
import { PostingButton } from "../../styles/PostingStyle";
import "../../styles/markdown.css";
import { post } from "../../utils/api";

function Posting() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const categoryRef = useRef(null);
  const buttonRef = useRef(null);

  const [renderer, setRenderer] = useState(true);
  const inputEmpty = useRef(true);

  const handleClick = async (e) => {
    e.preventDefault();

    setRenderer(!renderer);

    if (!inputEmpty.current) {
      await handleSubmit();
    } else {
      const errorMessage = "빈값을 입력해주세요.";
      throw new Error(errorMessage);
    }
  };

  const handleSubmit = async (e) => {
    try {
      console.log("handleSubmit 실행!");
      const posting = {
        title: titleRef.current?.value,
        content: contentRef.current?.value,
        tags: tagRef.current.innerText.slice(1).split("\n#"),
        subjectId: null,
        category: categoryRef.current?.value,
      };

      await post("post", posting);
      navigate("/posts");
    } catch (error) {
      throw new Error(error);
    }
  };

  const printRef = () => {
    console.log("titleref : ", titleRef.current?.value);
    console.log("contentref : ", contentRef.current?.value);
    console.log("categoryref : ", categoryRef.current?.value);
    console.log("tagref : ", tagRef.current.innerText.slice(1).split("\n#"));
    console.log("-===================");

    console.log(inputEmpty.current);
    console.log(titleRef.current?.value.length === 0);
    console.log(categoryRef.current?.value.length === 0);
    console.log(contentRef.current?.value.length === 0);
  };

  useEffect(() => {
    inputEmpty.current =
      contentRef.current?.value.length === 0 ||
      titleRef.current?.value.length === 0 ||
      categoryRef.current?.value.length === 0;
    console.log(inputEmpty.current);
  }, [renderer]);

  return (
    <PostContainer>
      <PostingHeader ref={titleRef} />
      <PostingCategory ref={categoryRef} />
      <PostingTag ref={tagRef} />
      <PostingContents ref={contentRef} />
      <div className="postingButton">
        <PostingButton type="submit" onClick={handleClick} ref={buttonRef}>
          출간하기
        </PostingButton>
        <button onClick={printRef}>ref 값 출력</button>
      </div>
    </PostContainer>
  );
}
export default Posting;
