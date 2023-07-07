import type { Meta, StoryObj } from '@storybook/react';

import ViewComfyOutlined from '../../lib/image/ViewComfyOutlined';

const meta: Meta<typeof ViewComfyOutlined> = {
  component: ViewComfyOutlined,
  tags: ['autodocs'],
  title: 'image/ViewComfyOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewComfyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
