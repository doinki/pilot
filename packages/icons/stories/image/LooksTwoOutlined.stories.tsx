import type { Meta, StoryObj } from '@storybook/react';

import LooksTwoOutlined from '../../lib/image/LooksTwoOutlined';

const meta: Meta<typeof LooksTwoOutlined> = {
  component: LooksTwoOutlined,
  tags: ['autodocs'],
  title: 'image/LooksTwoOutlined',
};

export default meta;
type Story = StoryObj<typeof LooksTwoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
