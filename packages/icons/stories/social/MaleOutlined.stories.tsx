import type { Meta, StoryObj } from '@storybook/react';

import MaleOutlined from '../../lib/social/MaleOutlined';

const meta: Meta<typeof MaleOutlined> = {
  component: MaleOutlined,
  tags: ['autodocs'],
  title: 'social/MaleOutlined',
};

export default meta;
type Story = StoryObj<typeof MaleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
