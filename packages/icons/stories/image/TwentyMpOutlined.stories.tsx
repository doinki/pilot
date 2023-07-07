import type { Meta, StoryObj } from '@storybook/react';

import TwentyMpOutlined from '../../lib/image/TwentyMpOutlined';

const meta: Meta<typeof TwentyMpOutlined> = {
  component: TwentyMpOutlined,
  tags: ['autodocs'],
  title: 'image/TwentyMpOutlined',
};

export default meta;
type Story = StoryObj<typeof TwentyMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
