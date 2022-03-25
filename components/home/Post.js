import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import Image2 from "react-native-scalable-image";
import { ICONS } from "../../data/posts";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 10, marginTop: 5 }}>
        <PostFooter />
        <View style={{ marginHorizontal: 8 }}>
          <Likes post={post} />
          <Posting post={post} />
          <CommentSection post={post} />
          <Comments post={post} />
        </View>
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 6,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          width={Dimensions.get("window").width}
          source={post.profile_picture}
          style={PostStyle.post_header}
        />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>
      <Text style={{ color: "white", fontWeight: "700" }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    // <View style={PostHeaderStyle.image}>
    <View>
      <Image2 width={Dimensions.get("window").width} source={post.image} />
    </View>
    /* </View> */
  );
};

const PostFooter = ({}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={PostStyle.leftContainerIcon}>
        <Icon imgStyle={PostStyle.footIcon} imgpath={ICONS[0].imagepath} />
        <Icon imgStyle={PostStyle.footIcon} imgpath={ICONS[1].imagepath} />
        <Icon imgStyle={PostStyle.footIcon} imgpath={ICONS[2].imagepath} />
      </View>

      <View style={{ alignItems: "flex-end", flex: 1 }}>
        <Icon imgStyle={PostStyle.footIcon} imgpath={ICONS[3].imagepath} />
      </View>
    </View>
  );
};

const Icon = ({ imgStyle, imgpath }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={imgpath} />
    </TouchableOpacity>
  );
};

const Likes = ({ post }) => {
  return (
    <Text style={{ color: "white" }}>{post.likes.toLocaleString("en")}</Text>
  );
};

const Posting = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ color: "white", fontWeight: "600" }}>
        <Text>{post.user + "   "}</Text>
        <Text>{post.caption}</Text>
      </Text>
    </View>
  );
};

const CommentSection = ({ post }) => {
  return (
    <View>
      {!!post.comments.length && (
        <Text style={{ color: "grey", marginTop: 5 }}>
          View{post.comments.length > 1 ? " all " : " "}
          {post.comments.length}
          {post.comments.length > 1 ? " comments" : " comment"}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => {
  return (
    <>
      {post.comments.map((comment, index) => (
        <View key={index} style={{ marginTop: 5 }}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
            {comment.comment}
          </Text>
        </View>
      ))}
    </>
  );
};

const PostStyle = StyleSheet.create({
  post_header: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 7,
    borderWidth: 3,
    borderColor: "#ff0066",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  footIcon: {
    width: 25,
    height: 25,
    flexDirection: "row",
    margin: 8,
  },
  leftContainerIcon: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
