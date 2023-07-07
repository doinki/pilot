import type { Meta, StoryObj } from '@storybook/react';

import ThumbDownOffAltOutlined from '../../lib/action/ThumbDownOffAltOutlined';

const meta: Meta<typeof ThumbDownOffAltOutlined> = {
  component: ThumbDownOffAltOutlined,
  tags: ['autodocs'],
  title: 'action/ThumbDownOffAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ThumbDownOffAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
