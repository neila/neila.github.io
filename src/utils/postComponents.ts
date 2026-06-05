import type { ComponentType } from 'react';
import Beginning from '../../public/posts/Beginning.md';
import BirthdayConspiracy from '../../public/posts/Birthday Conspiracy.md';
import BRLO from '../../public/posts/BRLO.md';
import DecentralizingOnlineAccounts from '../../public/posts/Decentralizing Online Accounts.md';
import DigitalGarden from '../../public/posts/Digital garden.md';
import GPG from '../../public/posts/GPG.md';
import UpdatingGPGKeyForGitSigning from '../../public/posts/Updating GPG key for git signing.md';

export const postComponents: Record<string, ComponentType> = {
  Beginning,
  'Birthday Conspiracy': BirthdayConspiracy,
  BRLO,
  'Decentralizing Online Accounts': DecentralizingOnlineAccounts,
  'Digital garden': DigitalGarden,
  GPG,
  'Updating GPG key for git signing': UpdatingGPGKeyForGitSigning,
};
