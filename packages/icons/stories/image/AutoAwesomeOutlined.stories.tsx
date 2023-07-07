import type { Meta, StoryObj } from '@storybook/react';

import AutoAwesomeOutlined from '../../lib/image/AutoAwesomeOutlined';

const meta: Meta<typeof AutoAwesomeOutlined> = {
  component: AutoAwesomeOutlined,
  tags: ['autodocs'],
  title: 'image/AutoAwesomeOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoAwesomeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
