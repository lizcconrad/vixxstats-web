import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Page from '../common/Page.js';
import HourlyChart from './HourlyChart.js';
import moment from 'moment';

const GET_VIDEO_STATS = gql`
  query($video_id: String) {
    getVideoStats(video_id: $video_id) {
      title
      viewCount
      likeCount
      dislikeCount
      commentCount
      datetime_recorded
    }
  }
`;




function HourlyStats (props) {

  const { data, loading, error } = useQuery(GET_VIDEO_STATS, {variables: { video_id: '5JPGujmFbis' }});

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  let videoStatsRaw = data['getVideoStats'];

  let i;
  let stats = [];
  for(i=0; i < data['getVideoStats'].length; i++) {
    stats.push({
      datetime: moment(videoStatsRaw[i]['datetime_recorded']).toDate(), 
      viewCount: videoStatsRaw[i]['viewCount']});
  }


  return (
    <Page>
      <HourlyChart title={videoStatsRaw[0]['title']} data={stats} />
    </Page>
  );
}

export default HourlyStats;
