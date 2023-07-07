import type { Meta, StoryObj } from '@storybook/react';

import TwelveMpOutlined from '../../lib/image/TwelveMpOutlined';

const meta: Meta<typeof TwelveMpOutlined> = {
  component: TwelveMpOutlined,
  tags: ['autodocs'],
  title: 'image/TwelveMpOutlined',
};

export default meta;
type Story = StoryObj<typeof TwelveMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
