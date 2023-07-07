import type { Meta, StoryObj } from '@storybook/react';

import NavigateBeforeOutlined from '../../lib/image/NavigateBeforeOutlined';

const meta: Meta<typeof NavigateBeforeOutlined> = {
  component: NavigateBeforeOutlined,
  tags: ['autodocs'],
  title: 'image/NavigateBeforeOutlined',
};

export default meta;
type Story = StoryObj<typeof NavigateBeforeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
