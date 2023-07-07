import type { Meta, StoryObj } from '@storybook/react';

import ViewComfyAltOutlined from '../../lib/action/ViewComfyAltOutlined';

const meta: Meta<typeof ViewComfyAltOutlined> = {
  component: ViewComfyAltOutlined,
  tags: ['autodocs'],
  title: 'action/ViewComfyAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewComfyAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
