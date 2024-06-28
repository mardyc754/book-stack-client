import { useState } from 'react';

import { User } from '@/schemas/auth';

import { useChangeUserPassword } from '@/hooks/useChangeUserPassword';

import { PrimaryButton } from '@/components/atoms/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ChangePasswordDialogProps {
  userId: User['id'];
}

export function ChangePasswordDialog({ userId }: ChangePasswordDialogProps) {
  const [newPassword, setNewPassword] = useState('');

  const { mutate: changePassword } = useChangeUserPassword({
    userId,
    newPassword
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PrimaryButton>Change password</PrimaryButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Change password</DialogTitle>
          <DialogDescription>Set a new password for the user</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            New password
          </Label>
          <Input
            id="price"
            defaultValue={newPassword}
            type="password"
            className="col-span-3"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <PrimaryButton
              onClick={() => {
                changePassword();
              }}
            >
              Change password
            </PrimaryButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
