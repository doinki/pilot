import type { Meta, StoryObj } from '@storybook/react';

import NoEncryptionOutlined from '../../lib/notification/NoEncryptionOutlined';

const meta: Meta<typeof NoEncryptionOutlined> = {
  component: NoEncryptionOutlined,
  tags: ['autodocs'],
  title: 'notification/NoEncryptionOutlined',
};

export default meta;
type Story = StoryObj<typeof NoEncryptionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
