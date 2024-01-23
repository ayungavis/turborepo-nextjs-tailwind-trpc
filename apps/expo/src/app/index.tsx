import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { FlashList } from "@shopify/flash-list";

import type { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";

function PostCard(props: {
  post: RouterOutputs["post"]["all"][number];
  onDelete: () => void;
}) {
  return (
    <View className="flex flex-row rounded-lg bg-white/10 p-4">
      <View className="flex-grow">
        <Link
          asChild
          href={{
            pathname: "/post/[id]",
            params: { id: props.post.id },
          }}
        >
          <Pressable>
            <Text className="text-xl font-semibold text-pink-400">
              {props.post.title}
            </Text>
            <Text className="mt-2 text-white">{props.post.content}</Text>
          </Pressable>
        </Link>
      </View>
      <Pressable onPress={props.onDelete}>
        <Text className="font-bold uppercase text-pink-400">Delete</Text>
      </Pressable>
    </View>
  );
}

function CreatePost() {
  const utils = api.useUtils();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate, error } = api.post.create.useMutation({
    async onSuccess() {
      setTitle("");
      setContent("");
      await utils.post.all.invalidate();
    },
  });

  return (
    <View className="mt-4">
      <TextInput
        className="mb-2 rounded bg-white/10 p-2 text-white"
        placeholder="Title"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={title}
        onChangeText={setTitle}
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <Text className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </Text>
      )}
      <TextInput
        className="mb-2 rounded bg-white/10 p-2 text-white"
        placeholder="Content"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={content}
        onChangeText={setContent}
      />
      {error?.data?.zodError?.fieldErrors.content && (
        <Text className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.content}
        </Text>
      )}
      <Pressable
        className="rounded bg-[#EF566B] p-2"
        onPress={() => {
          mutate({
            title,
            content,
          });
        }}
      >
        <Text className="font-semibold">Publish post</Text>
      </Pressable>
      {error?.data?.code === "UNAUTHORIZED" && (
        <Text className="mt-2 text-red-500">
          You need to be logged in to create a post
        </Text>
      )}
    </View>
  );
}

export default function Index() {
  const utils = api.useUtils();

  const postQuery = api.post.all.useQuery();

  const deletePostMutation = api.post.delete.useMutation({
    onSettled: () => utils.post.all.invalidate(),
  });

  return (
    <SafeAreaView className="bg-white">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home" }} />
      <View className="h-full w-full p-4">
        <Text className="pb-2 text-5xl font-bold">Turborepo Boilerplate</Text>

        <Pressable onPress={() => void utils.post.all.invalidate()}>
          <Text className="text-[#EF566B]">Refresh posts</Text>
        </Pressable>

        <View className="py-2">
          <Text className="font-semibold italic">Press on a post</Text>
        </View>

        <FlashList
          ItemSeparatorComponent={() => <View className="h-2" />}
          data={postQuery.data}
          estimatedItemSize={20}
          renderItem={(p) => (
            <PostCard
              post={p.item}
              onDelete={() => deletePostMutation.mutate(p.item.id)}
            />
          )}
        />

        <CreatePost />
      </View>
    </SafeAreaView>
  );
}
