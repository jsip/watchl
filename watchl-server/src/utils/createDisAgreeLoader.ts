import DataLoader from "dataloader";
import { DisAgree } from "../entities/DisAgree";

export const createDisAgreeLoader = () =>
  new DataLoader<{ postId: number; userId: number }, DisAgree | null>(
    async (keys) => {
      const disAgrees = await DisAgree.findByIds(keys as any);
      const disAgreeIdToDisAgree: Record<string, DisAgree> = {};
      disAgrees.forEach((d) => {
        disAgreeIdToDisAgree[`${d.userId}|${d.postId}`] = d;
      });
      console.log(disAgrees);
      return keys.map(
        (key) => disAgreeIdToDisAgree[`${key.userId}|${key.postId}`]
      );
    }
  );
