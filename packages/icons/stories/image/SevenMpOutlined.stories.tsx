import type { Meta, StoryObj } from '@storybook/react';

import SevenMpOutlined from '../../lib/image/SevenMpOutlined';

const meta: Meta<typeof SevenMpOutlined> = {
  component: SevenMpOutlined,
  tags: ['autodocs'],
  title: 'image/SevenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof SevenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
