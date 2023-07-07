import type { Meta, StoryObj } from '@storybook/react';

import OfflineShareOutlined from '../../lib/navigation/OfflineShareOutlined';

const meta: Meta<typeof OfflineShareOutlined> = {
  component: OfflineShareOutlined,
  tags: ['autodocs'],
  title: 'navigation/OfflineShareOutlined',
};

export default meta;
type Story = StoryObj<typeof OfflineShareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
