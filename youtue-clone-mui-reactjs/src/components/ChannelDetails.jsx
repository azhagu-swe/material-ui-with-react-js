import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);
  return <div>{id}</div>;
};
export default ChannelDetail;
