import type { Meta, StoryObj } from '@storybook/react';

import NoEncryptionGmailerrorredOutlined from '../../lib/notification/NoEncryptionGmailerrorredOutlined';

const meta: Meta<typeof NoEncryptionGmailerrorredOutlined> = {
  component: NoEncryptionGmailerrorredOutlined,
  tags: ['autodocs'],
  title: 'notification/NoEncryptionGmailerrorredOutlined',
};

export default meta;
type Story = StoryObj<typeof NoEncryptionGmailerrorredOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
