import type { Meta, StoryObj } from '@storybook/react';

import WbTwilightOutlined from '../../lib/image/WbTwilightOutlined';

const meta: Meta<typeof WbTwilightOutlined> = {
  component: WbTwilightOutlined,
  tags: ['autodocs'],
  title: 'image/WbTwilightOutlined',
};

export default meta;
type Story = StoryObj<typeof WbTwilightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
