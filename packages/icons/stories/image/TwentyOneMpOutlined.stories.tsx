import type { Meta, StoryObj } from '@storybook/react';

import TwentyOneMpOutlined from '../../lib/image/TwentyOneMpOutlined';

const meta: Meta<typeof TwentyOneMpOutlined> = {
  component: TwentyOneMpOutlined,
  tags: ['autodocs'],
  title: 'image/TwentyOneMpOutlined',
};

export default meta;
type Story = StoryObj<typeof TwentyOneMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
