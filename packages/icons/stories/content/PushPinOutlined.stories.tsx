import type { Meta, StoryObj } from '@storybook/react';

import PushPinOutlined from '../../lib/content/PushPinOutlined';

const meta: Meta<typeof PushPinOutlined> = {
  component: PushPinOutlined,
  tags: ['autodocs'],
  title: 'content/PushPinOutlined',
};

export default meta;
type Story = StoryObj<typeof PushPinOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
