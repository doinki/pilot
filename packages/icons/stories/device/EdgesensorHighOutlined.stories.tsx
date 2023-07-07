import type { Meta, StoryObj } from '@storybook/react';

import EdgesensorHighOutlined from '../../lib/device/EdgesensorHighOutlined';

const meta: Meta<typeof EdgesensorHighOutlined> = {
  component: EdgesensorHighOutlined,
  tags: ['autodocs'],
  title: 'device/EdgesensorHighOutlined',
};

export default meta;
type Story = StoryObj<typeof EdgesensorHighOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
