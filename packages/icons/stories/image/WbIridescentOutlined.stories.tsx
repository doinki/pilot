import type { Meta, StoryObj } from '@storybook/react';

import WbIridescentOutlined from '../../lib/image/WbIridescentOutlined';

const meta: Meta<typeof WbIridescentOutlined> = {
  component: WbIridescentOutlined,
  tags: ['autodocs'],
  title: 'image/WbIridescentOutlined',
};

export default meta;
type Story = StoryObj<typeof WbIridescentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
