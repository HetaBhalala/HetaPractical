import client from "./client";

export default function getHomeData(sessionId, page, limit) {
  return client.get("http://44.234.205.222/events/api/home/data");
}
