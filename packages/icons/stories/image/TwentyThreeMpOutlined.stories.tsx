import type { Meta, StoryObj } from '@storybook/react';

import TwentyThreeMpOutlined from '../../lib/image/TwentyThreeMpOutlined';

const meta: Meta<typeof TwentyThreeMpOutlined> = {
  component: TwentyThreeMpOutlined,
  tags: ['autodocs'],
  title: 'image/TwentyThreeMpOutlined',
};

export default meta;
type Story = StoryObj<typeof TwentyThreeMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
