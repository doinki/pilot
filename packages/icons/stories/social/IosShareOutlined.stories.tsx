import type { Meta, StoryObj } from '@storybook/react';

import IosShareOutlined from '../../lib/social/IosShareOutlined';

const meta: Meta<typeof IosShareOutlined> = {
  component: IosShareOutlined,
  tags: ['autodocs'],
  title: 'social/IosShareOutlined',
};

export default meta;
type Story = StoryObj<typeof IosShareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
