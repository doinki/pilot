import type { Meta, StoryObj } from '@storybook/react';

import TwentyTwoMpOutlined from '../../lib/image/TwentyTwoMpOutlined';

const meta: Meta<typeof TwentyTwoMpOutlined> = {
  component: TwentyTwoMpOutlined,
  tags: ['autodocs'],
  title: 'image/TwentyTwoMpOutlined',
};

export default meta;
type Story = StoryObj<typeof TwentyTwoMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
