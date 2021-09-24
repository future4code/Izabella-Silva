export interface FeedRepository{
    getFeedFriendship(friendId: string): Promise<any>
}