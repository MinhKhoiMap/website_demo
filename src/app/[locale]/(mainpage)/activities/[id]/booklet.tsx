"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";

export default function Booklet({
  flipbook_page_front,
  flipbook_page_back,
  page,
  flipbook_width = 200,
  flipbook_height = 200,
}: {
  flipbook_page_front: string;
  flipbook_page_back: string;
  page: number;
  flipbook_width?: number;
  flipbook_height?: number;
}) {
  const [pageEle, setPageEle] = useState<HTMLElement[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(pageEle.length - 1);
  const [z, setZ] = useState<number>(1);

  useEffect(() => {
    const right: HTMLElement[] = [...$(".right")];
    setPageEle(right);
    setCurrentPage(right.length);
  }, []);

  function turnLeft() {
    let sii = JSON.parse(JSON.stringify(si));
    console.log(sii);

    if (sii < rightEle.length) {
      function sttmot(i: number) {
        setTimeout(() => {
          rightEle[i].style.zIndex = "auto";
        }, 300);
      }

      sttmot(sii);
      sii++;
    } else {
      sii = 1;

      for (let i = rightEle.length - 1; i > 0; i--) {
        rightEle[i].classList.add("flip");
        rightEle[i].style.zIndex = (rightEle.length + 1 - i).toString();
      }
    }
    rightEle[sii - 1].className = "right";

    setSi(sii);
  }

  function turnRight() {
    if (currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(pageEle.length - 1);
      setPageEle((prevCards) =>
        prevCards.map(() => {
          return false; // Reset all cards
        })
      );
      setZIndex(1);
    }
    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[currentIndex] = true;
      return newCards;
    });
    setZIndex((prevZIndex) => prevZIndex + 1);
  }

  return (
    <div className="right">
      <Image
        className="back"
        src={flipbook_page_back}
        alt={`booklet_page${page}`}
        width={flipbook_width}
        height={flipbook_height}
        onClick={turnLeft}
      />
      <Image
        className="front"
        src={flipbook_page_front}
        alt={`booklet_page${page}`}
        width={flipbook_width}
        height={flipbook_height}
        onClick={turnRight}
      />
    </div>
  );
}
