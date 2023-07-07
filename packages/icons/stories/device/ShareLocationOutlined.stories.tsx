import type { Meta, StoryObj } from '@storybook/react';

import ShareLocationOutlined from '../../lib/device/ShareLocationOutlined';

const meta: Meta<typeof ShareLocationOutlined> = {
  component: ShareLocationOutlined,
  tags: ['autodocs'],
  title: 'device/ShareLocationOutlined',
};

export default meta;
type Story = StoryObj<typeof ShareLocationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
