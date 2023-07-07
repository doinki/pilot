import type { Meta, StoryObj } from '@storybook/react';

import TwoMpOutlined from '../../lib/image/TwoMpOutlined';

const meta: Meta<typeof TwoMpOutlined> = {
  component: TwoMpOutlined,
  tags: ['autodocs'],
  title: 'image/TwoMpOutlined',
};

export default meta;
type Story = StoryObj<typeof TwoMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
