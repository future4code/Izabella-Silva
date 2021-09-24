export interface FriendshipRepository{
    createFriendship(userId1: string, userId2: string): Promise<string>;
    deleteFriendship(friendId1: string, friendId2: string): Promise<string>
    findFriendship(userId: string): Promise<any>
}