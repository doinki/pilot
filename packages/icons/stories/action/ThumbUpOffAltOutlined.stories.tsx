import type { Meta, StoryObj } from '@storybook/react';

import ThumbUpOffAltOutlined from '../../lib/action/ThumbUpOffAltOutlined';

const meta: Meta<typeof ThumbUpOffAltOutlined> = {
  component: ThumbUpOffAltOutlined,
  tags: ['autodocs'],
  title: 'action/ThumbUpOffAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ThumbUpOffAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
