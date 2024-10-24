import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api";

import Main from "../components/section/Main";

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Channel = () => {
  const { channelId } = useParams();
  const [channelDetail, setChannelDetail] = useState();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
      setChannelDetail(data.items[0]);
    };
    fetchResults();
  }, [channelId]);

  return (
    <Main title="유튜브 채널" description="유튜브 채널페이지입니다.">
      {channelDetail && (
        <setcion id="channel">
          <div
            className="channel__header"
            style={{
              backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})`,
            }}
          >
            <div className="circle">
              <img
                src={channelDetail.snippet.thumbnails.high.url}
                alt={channelDetail.snippet.title}
              />
            </div>
          </div>
          <div className="channel__info">
            <h3 className="title">{channelDetail.snippet.title}</h3>
            <p className="desc">{channelDetail.snippet.description}</p>
            <div className="info">
              <span>
                <CiBadgeDollar />
                {channelDetail.statistics.subscriberCount}
              </span>
              <span>
                <CiMedal />
                {channelDetail.statistics.videoCount}
              </span>
              <span>
                <CiRead />
                {channelDetail.statistics.viewCount}
              </span>
            </div>
          </div>
        </setcion>
      )}
    </Main>
  );
};

export default Channel;
